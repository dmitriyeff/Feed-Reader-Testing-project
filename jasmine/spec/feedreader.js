/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* Placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

  describe('RSS Feeds', function() {
        /* Test that ensures the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
          expect(allFeeds).toBeDefined();
          expect(allFeeds.length).not.toBe(0);
        });
        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('a URL defined and not empty', () => {
          for (const url of allFeeds) {
            expect(url).toBeDefined();
            expect(url.length).not.toBe(0);
          }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is defined and is not empty', () => {
           for (const name of allFeeds) {
             expect(name).toBeDefined();
             expect(name.length).not.toBe(0);
           }
         });
  });



    describe('The menu', () => {
        /* Test that ensures the menu element is
         * hidden by default.
         */
         it('element hidden by default', () => {
           // check if body element has a class: "menu-hidden"
           const hiddenByDefault = $('body').hasClass('menu-hidden');
           expect(hiddenByDefault).toBe(true);
         });
         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
          it('changes visibility when clicked', () => {
            const menuIcon = $('.menu-icon-link'); // select menu icon

            // does the menu display when clicked
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            // does menu hide when clicked again
            menuIcon.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    }); // end of a test suite: "The menu"

    describe('Initial Entries', () => {
      const feed = $('.feed');

      beforeEach((done) => {
        loadFeed(0, done); // async method
      });
        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         it('have at least one entry element', () => {

          expect((feed).find('.entry').length).not.toBe(0);
         });

    }); // end of a test suite: "Initial Entries"

    describe('New Feed Selection', () => {
          const feed = document.querySelector('.feed');
          let firstFeed, secondFeed;

          beforeEach((done) => {
            // get content of feed container
              loadFeed(0, () => {
                firstFeed = feed.innerText;
                // get content of feed container again
                loadFeed(1, () => {
                  secondFeed = feed.innerText;
                  done();
                  });
              });
          });

          it('contenct actually changes', () => {
            // if firstFeed not equal secondFeed then content changes
              expect(firstFeed).not.toEqual(secondFeed);
          });
          /* test that ensures when a new feed is loaded
           * by the loadFeed function that the content actually changes.
           * loadFeed() is asynchronous.
           */
    }); // end of a test suite: "New Feed Selection"

}());
