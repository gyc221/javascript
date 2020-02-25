class RowToCol
{
  constructor(table){
    this.tb=table;
    this.retTb=[];
    this.row={};
    this.fixedCol=[];
    this.transCol=[];
  }
  setFixedCol(...cols)
  {
    this.fixedCol.push(...cols)
  }
  setTransCol(...cols)
  {
    this.transCol.push(...cols)
  }
  isExistsFiexdCol()
  {
    for(let col of this.fixedCol)
    {
       if(this.row[col])
       {
         return true;
       }
    }
    return false;
  }
  isEqFiexdColValue(curRow)
  {
    let ret=true;
    for(let col of this.fixedCol)
    {
      ret=(ret && (this.row[col] == curRow[col]))               
    }
    return ret;
  }
  setFiexdColsValue(curRow)
  {
    for(let col of this.fixedCol)
    {
      this.row[col]= curRow[col]               
    }
  }
  setTransColsValue(curRow)
  {
    for(let col of this.transCol)
    {
      this.row[col.title+"_"+curRow[col.title]+"_"+col.val]=curRow[col.val];
    }
  }

  getTransTable()
  {
    for(let i=0;i<this.tb.length;i++)
    {
      let curRow=this.tb[i];
      if(i==0)
      {
        this.setFiexdColsValue(curRow);
        this.setTransColsValue(curRow);
      }
      else
      {
        if(this.isEqFiexdColValue(curRow))
        {
          this.setTransColsValue(curRow);
        }
        else
        {
          this.retTb.push(this.row);
          this.row={};
          this.setFiexdColsValue(curRow);
          this.setTransColsValue(curRow);
        }
      }
    }
    if(this.isExistsFiexdCol())
    {
      this.retTb.push(this.row);
    }
    return this.retTb;
  }
}