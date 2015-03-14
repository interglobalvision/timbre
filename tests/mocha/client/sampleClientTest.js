/* USER STORIES
  should  be created  with name
  should  be created  with location
  should  be created  by a registered user
  could be created  with an address
  could have  more than one user
  could be attached   to a user
  could be deattached from a user
*/
if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Timbres", function(){
      it("should be created succesfully with all correct params", function() {

        // Create test user
        Accounts.createUser({
          email: 'testUser@interglobal.vision',
          password: 'interglobal'
        });
        
        var testUser = Meteor.user();

        // Timbre WITH name
        var testTimbre = {
          name: "CHAVVOS420",
          location: {
            type: "Point",
            coordinates: [ -99.1490657, 19.4313399 ]
          },
          address: "Ayuntamiento 132 - 15, Col. Centro, Cuauhtémoc, DF",
          users: [ Meteor.user()._id ]
        }

      });

      it("should be created with a name", function(){

        // Create test user
        Accounts.createUser({
          email: 'testUser@interglobal.vision',
          password: 'interglobal'
        });
        
        // Timbre WITHOUT name
        var testTimbre = {
          name: "",
          location: {
            type: "Point",
            coordinates: [ -99.1490657, 19.4313399 ]
          },
          address: "Ayuntamiento 132 - 15, Col. Centro, Cuauhtémoc, DF",
          users: [ Meteor.user()._id ]
        };
        
        Meteor.call('createTimbre', testTimbre, function(err) {
          chai.assert(err.error, "empty-name");
        });

      });
    });
    describe("a group of tests", function(){
      it("should respect equality", function(){
        chai.assert.equal(5,5);
      });
    });
  });
}
