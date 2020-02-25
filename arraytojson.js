class ArrToJson{
    constructor(arr){
      this.arr2=arr;
    }
    getObjectFromRowNum(rowNum){
      let curObj={};
      const rows=this.arr2.length;
      const cols=this.arr2[0].length;
      if(rowNum==0)
      {
        for(let i=0;i<cols;i++){
          curObj[this.arr2[0][i]]=null;
        }
        return curObj;
      }
      for(let i=0;i<cols;i++){
          curObj[this.arr2[0][i]]=this.arr2[rowNum][i];
      }
      return curObj;
    }
    getJsonObjList(){
      if(this.arr2.length<1){
        return []
      }
      if(this.arr2.length==1){
        return [this.getObjectFromRowNum(0)]
      }
      let curArr=[];
      for(let i=1;i<this.arr2.length;i++){
        curArr.push(this.getObjectFromRowNum(i));
      }
      return curArr;
    }
  }