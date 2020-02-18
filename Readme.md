API Routing:

Simple, logicall routes eg. /api/github/users/UserTest/repos/RepoTest
allow to clearly define VC service, user and his repos 

To standarize API which is used by my React App, on the backend I've decided to create adapters for external API's.
Adapters allow me to fit external response to my API repsponse used inside my application.

I tried to separate Domain logic from Framework to make the code framework agnostic in order to avoid problems when changing to other framework

Inside adapter I'm fetching and "Adapting" the payload to fit my API structure.

If there's need for another VC service, simply create adapter, add another option to AdapterFactory::createByName()

In the future creating of API structure should be defined as separate object with validation, for all adapters in order to have one single point where 
we define our API structure.

I'm currently using Symfonys HttpClient but by creating common ApiClient interface, it can by Guzzle, or other compatible with PSR-7



TO DO

	FrontEnd:
		-Fix saving repoDetails, to save it to store as [{repoName: repoDetails}].
				The concept was when clicked on repo header, app would fetch repo details from the backend and display accordion body with information about all forks, all languages used, link to original repo if forked
		- Implement sorting, tried to do it with back and forth from <Sort> to <RepoView> and also using "getDerivedStateFromProps".
			 Best possible way that came to my mind would be to use Redux store and store there dispatched value from <Sort>, then inside <RepoList>
			 sort elements before rendering. Sorting functions also could be moved to separated place.
	 	- In future query API for available Version Control Services and add indexing from backend 
	
    BackEnd:
		- Input validation - sanitize and filter url 
		- Create response objects with validation for inside API responses
		- Move string keys to Enums
		- Create urls by using sprintf  eg. "sprintf('/%s/users/%s/repos/%s', $versionControl, $userName, $repoName)
		- Create collections and mentioned reponse objects instead of returning array. In order to be sure of the data returned
		- Avoid using factory->createByName() in every function. 
			Instead:
				-Create adapters in DI
				-Generate adapter earlier and pass it into service
				-Create method for for getting adapter from factory
		- Error handling from outside APIs, currently 404, 500, 403 etc. throws Exception, which are unhandled (on the frontend it is handled)
