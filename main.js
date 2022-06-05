// var PostModel = Backbone.Model.extend({
//   defaults: function() {
//   return {
//     user: '',
//     text: ''
//    }
//  }
// });

// var PostView = Backbone.View.extend({
//   template: Handlebars.compile($('#post-template').html()),

//   className: 'post',

//   render: function () {
//     this.$el.html(this.template(this.model.attributes));

//     return this;
//   }
// });

// $('.add-post').on('click', function () {
//   var text = $('#post-name').val();
//   var user = $('#post-user').val();

//   var postModel = new PostModel({ text: text, user: user });
//   var postView = new PostView({ model: postModel });

//   $('.posts').append(postView.render().el);
// });


var Book = Backbone.Model.extend({
  defaults: function() {
    return {
      title: '',
      author: ''
    }
  }
});

var Books = Backbone.Collection.extend({ model: Book });

var BookCase = Backbone.Model.extend({
  defaults: function () {
    return {
      label: '',
      books: new Books()
    };
  }
});

var BookCases = Backbone.Collection.extend({ model: BookCase });

var Library = Backbone.Model.extend({
  defaults: function () {
    return {
      name: '',
      bookCases: new BookCases()
    };
  }
});

var library = new Library({ name: 'Awesome Library' });

var bookCase1 = new BookCase({ label: 'History' });

bookCase1.get('books').add({
  title: 'The History of the Decline and Fall of the Roman Empire',
  author: 'Edward Gibbon'
});

bookCase1.get('books').add({
  title: 'Antiquities of the Jews',
  author: 'Flavius Josephus'
});

var bookCase2 = new BookCase({ label: 'Fiction' });

bookCase2.get('books').add({
  title: 'Brave New World',
  author: 'Aldous Huxley'
});

library.get('bookCases').add(bookCase1);
library.get('bookCases').add(bookCase2);

console.log(library.toJSON());

// The "History" book case contains two books:
// The History of the Decline and Fall of the Roman Empire, by Edward Gibbon
// Antiquities of the Jews, by Flavius Josephus
// The "Fiction" book case includes one book: Brave New World, by Aldous Huxley