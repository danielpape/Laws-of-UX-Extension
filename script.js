let principles = [
{
  name: "Aesthetic Usability Effect",
  overview: "Users often perceive aesthetically pleasing design as design that&#8217;s more usable.",
},
{
  name: "Doherty Threshold",
  overview: "Productivity soars when a computer and its users interact at a pace (<400ms) that ensures that neither has to wait on the other.",
},
{
  name: "Fitt&#8217;s Law",
  overview: "The time to acquire a target is a function of the distance to and size of the target.",
},
{
  name: "Hick&#8217;s Law",
  overview: "The time it takes to make a decision increases with the number and complexity of choices.",
},
{
  name: "Jakob&#8217;s Law",
  overview: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
},
{
  name: "Law of Common Region",
  overview: "Elements tend to be perceived into groups if they are sharing an area with a clearly defined boundary.",
},
{
  name: "Law of Pr&auml;gnanz",
  overview: "People will perceive and interpret ambiguous or complex images as the simplest form possible, because it is the interpretation that requires the least cognitive effort of us.",
},
{
  name: "Law of Proximity",
  overview: "Objects that are near, or proximate to each other, tend to be grouped together.",
},
{
  name: "Law of Similarity",
  overview: "The human eye tends to perceive similar elements in a design as a complete picture, shape, or group, even if those elements are separated.",
},
{
  name: "Law of Uniform Connectedness",
  overview: "Elements that are visually connected are perceived as more related than elements with no connection.",
},
{
  name: "Law of Proximity",
  overview: "Objects that are near, or proximate to each other, tend to be grouped together.",
},
{
  name: "Miller&#8217;s Law",
  overview: "The average person can only keep 7 (plus or minus 2) items in their working memory.",
},
{
  name: "Occam&#8217;s Razor",
  overview: "Among competing hypotheses that predict equally well, the one with the fewest assumptions should be selected.",
},
{
  name: "Pareto Principle",
  overview: "The Pareto principle states that, for many events, roughly 80% of the effects come from 20% of the causes.",
},
{
  name: "Parkinson&#8217;s Law",
  overview: "Any task will inflate until all of the available time is spent.",
},
{
  name: "Postel&#8217;s Law",
  overview: "Be liberal in what you accept, and conservative in what you send.",
},
{
  name: "Serial Position Effect",
  overview: "Users have a propensity to best remember the first and last items in a series.",
},
{
  name: "Tesler&#8217;s Law",
  overview: "Tesler&#8217;s Law, also known as The Law of Conservation of Complexity, states that for any system there is a certain amount of complexity which cannot be reduced.",
},
{
  name: "Von Restorff Effect",
  overview: "The Von Restorff effect, also known as The Isolation Effect, predicts that when multiple similar objects are present, the one that differs from the rest is most likely to be remembered.",
},
{
  name: "Zeigarnik Effect",
  overview: "People remember uncompleted or interrupted tasks better than completed tasks.",
}
];

function generateLaw() {
  var principle = principles[Math.floor(Math.random() * principles.length)];
document.getElementById('card').innerHTML = '<svg viewBox="0 0 40 40" id="logo" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><title>Logo</title><path d="M20 38c9.941 0 18-8.059 18-18S29.941 2 20 2 2 10.059 2 20s8.059 18 18 18zm0 2C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20z"></path><path d="M7.854 7.854v24.292h24.292V7.854H7.854zm-2-2h28.292v28.292H5.854V5.854z"></path><path d="M20 10.326L9.09 32.146h21.82L20 10.326zm0-4.472l14.146 28.292H5.854L20 5.854z"></path></svg><h2 class="title">' + principle.name + '</h2><h3 class="overview"><button class="btn loadMoreBtn" id="deal-me-another-button">Load more</button>' + principle.overview + '</h3>';
}

document.addEventListener('DOMContentLoaded', function () {
  generateLaw();
  var button = document.getElementById("deal-me-another-button");
  button.addEventListener('click', function() {
    // document.getElementById('card').classList.add('card-afteranimation')
    setTimeout(generateLaw(), 600);
    
    });
});


