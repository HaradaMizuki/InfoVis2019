Vec3 = function(x,y,z){
  this.x=x;
  this.y=y;
  this.z=z;
}
Vec3.prototype.add =function(v)
{
  this.x+=v.x;
  this.y+=v.y;
  this.z+=v.z;
  return this;
}
Vec3.prototype.sum = function()
{
  return this.x+this.y+this.z;
}
Vec3.prototype.min = function(){
  if(this.x>this.y&&this.x>this.z)
    return this.x;
  if(this.y>this.x&&this.y>this.z)
    return this.y;
  if(this.z>this.y&&this.z>this.y)
    return this.z;
}
Vec3.prototype.max = function(){
  if(this.x<this.y&&this.x<this.z)
    return this.x;
  if(this.y<this.x&&this.y<this.z)
    return this.y;
  if(this.z<this.y&&this.z<this.y)
    return this.z;
}
Vec3.prototype.mid =function(){
  var min=this.min();
  var max=this.max();
  if(this.x<max&&this.x>min)
    return this.x;
  if(this.y<max&&this.y>min)
    return this.y;
  if(this.z<max&&this.z>min)
    return this.z;
}
