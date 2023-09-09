var t1 = gsap.timeline();
t1.from('#box', {
    stagger: .2,
    duration: 3,
    y:30,
    delay:4,
    scale:2,
    ease:'Expo.easeInOut',
    opacity: 0
})
.from('.naviteam',{
    stagger: .2,
    duration: 3,
    y:20,
    ease:'Expo.easeInOut',
    opacity: 0
}, '-=2')

.from('#line', {
    width: 0,
    duration: 1,
    ease: 'Expo.easeInOut',

}, '-=2')

.from('.top', {
    stagger: .2,
    duration: 3,
    y:20,
    ease:'Expo.easeInOut',
    opacity: 0
}, '-=2')


.from('#right-sec', {
    stagger: .2,
    duration: 3,
    x:80,
    scale:1.5,
    ease:'Expo.easeInOut',
    opacity: 0
}, '-=2')