/* scroller */
export default class Scroller{
  static preventMotion(e) {
    window.scrollTo(0, 0);
    // e.preventDefault();
    e.stopPropagation();
  }
  
  getScrollTop(){
    var scrollTop = 0;
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop;
    }else if (document.body) {
      scrollTop = document.body.scrollTop;
    }
    return scrollTop;
  }

  getClientHeight(){
    var clientHeight = 0;
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
    }else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
    }
    return clientHeight;
  }

  getScrollHeight(){
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }  

  constructor() {
    this.scroll = this.getScrollHeight();
    this.client = this.getClientHeight() + this.getScrollTop();
  }
  
  touchScroll(id){
    var el=document.getElementById(id);
    var scrollStartPosY=0;
    var scrollStartPosX=0;
    
    document.getElementById(id).addEventListener("touchstart", function(event) {
      scrollStartPosY=this.scrollTop+event.touches[0].pageY;
      scrollStartPosX=this.scrollLeft+event.touches[0].pageX;
    },false);

    document.getElementById(id).addEventListener("touchmove", function(event) {
      if ((this.scrollTop < this.scrollHeight-this.offsetHeight &&
	this.scrollTop+event.touches[0].pageY < scrollStartPosY-5) ||
	(this.scrollTop != 0 && this.scrollTop+event.touches[0].pageY > scrollStartPosY+5))
	event.preventDefault();	
      if ((this.scrollLeft < this.scrollWidth-this.offsetWidth &&
	this.scrollLeft+event.touches[0].pageX < scrollStartPosX-5) ||
	(this.scrollLeft != 0 && this.scrollLeft+event.touches[0].pageX > scrollStartPosX+5))
	event.preventDefault();	
      this.scrollTop=scrollStartPosY-event.touches[0].pageY;
      this.scrollLeft=scrollStartPosX-event.touches[0].pageX;
    }, false);
  }

  enableScroller(){
    window.removeEventListener("scroll", Scroller.preventMotion, false);
    window.removeEventListener("touchmove", Scroller.preventMotion, false);
    window.removeEventListener("touchstart", Scroller.preventMotion, false);
  }

  disableScroller(){
    window.addEventListener("scroll", Scroller.preventMotion, false);
    window.addEventListener("touchstart", Scroller.preventMotion, false);
    window.addEventListener("touchmove", Scroller.preventMotion, false);
  }
}
