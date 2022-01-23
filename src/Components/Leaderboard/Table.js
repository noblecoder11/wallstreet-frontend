import React, { PureComponent } from 'react'
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import img2 from './2nd.png';
import img1 from './1st.png';
import img3 from './3rd.png';
import './table.css'
    
export class Table extends PureComponent {
   
    constructor(props) {
        super(props)
    
        this.state = {
            offset: 0,
            tableData: [],
            tableData2:[],
            tableData3:[],
            tableData4:[],
            orgtableData: [],
            perPage: 10,
            currentPage: 0,
            filter:""
        }
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
            
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.loadMoreData()
        });

    };

    loadMoreData() {
		const data = this.state.orgtableData;
		
		const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
		
        var tab = data.slice(0,1);
        var tab2 = data.slice(1,2);
        var tab3 = data.slice(2,3);
        this.setState({
			pageCount: Math.ceil(data.length / this.state.perPage),
			tableData:slice,
            tableData2:tab,
            tableData3:tab2,
            tableData4:tab3,
		})
	
    }

    componentDidMount(){
        this.getData();
        
    }

    getData() {
        axios
            .get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {

                var data = res.data;
				
                var slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
                 var tab = data.slice(0,1);
                 var tab2 = data.slice(1,2);
                 var tab3 = data.slice(2,3);

                this.setState({
                    pageCount: Math.ceil(data.length / this.state.perPage),
                    orgtableData :res.data,
                    tableData:slice,
                    tableData2:tab,
                    tableData3:tab2,
                    tableData4:tab3,
                    
                })
            });
    }
    
    searchText(e1){
        this.setState({filter:e1.target.value});
    };
    render() {
         let{filter,tableData}=this.state;
         let Datadisplay=tableData.filter(item=>{
             return Object.keys(item).some(key =>
                item[key].toString().toLowerCase().includes(filter.toLowerCase()))
         })
        return (
           
            <div className="T4" style={{ color:"black",overflowX:"hidden",overflowY:"hidden",}}>
                  <h1  data-aos="fade-down" data-aos-duration="4000" style={{fontSize:"60px"}} className="web3">Leaderboard</h1>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
                {
                    this.state.tableData3.map((tdata, i=0) => (
                        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                  <div style={{display:"flex",flexDirection:"column"}}><img className='img3' data-aos="fade-down" data-aos-duration="3000" src={img2} style={{height:"300px"}}/><h1 style={{textAlign:"center",marginTop:"-30px"}}>{tdata.id}</h1></div>
                  </div> 
                  ))
                }
                 {
                    this.state.tableData2.map((tdata, i=0) => (
                        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                  <div style={{display:"flex",flexDirection:"column"}}><img className='img3' data-aos="fade-down" data-aos-duration="1000" src={img1} style={{height:"300px"}}/><h1 style={{textAlign:"center",marginTop:"-50px"}}>{tdata.id}</h1></div>
                  </div> 
                  ))
                }
                {
                    this.state.tableData4.map((tdata, i=0) => (
                        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
                  <div style={{display:"flex",flexDirection:"column"}}><img className='img3' data-aos="fade-down" data-aos-duration="3000" src={img3} style={{height:"300px",marginTop:"15%"}} /><h1 style={{textAlign:"center",marginTop:"-60px"}}>{tdata.id}</h1></div>
                  </div> 
                  ))
                }
              
                </div>
                   <input type="text" placeholder="  Search.." className="form" value={filter} onChange={this.searchText.bind(this)} /><i class="fas fa-search" style={{marginLeft:"-40px"}}></i>
                   {/* {this.state.tableData.filter((tdata)=>{if(searchTerm==""){return tdata}else if(tdata.name.toLowerCase().includes(searchTerm.toLowerCase()))
                   {
                       return tdata
                   }}).map((tdata, i)=>{
                        return<div>{tdata.name}</div>
                   })} */}
                  <table class="table" className="Tab" >
                    <thead>
                    <tr style={{height:"60px",backgroundColor:'black',textAlign:"center",className:"Tab2", borderBottom:"0.5px solid rgba(0, 0, 0, 0.392)"}} >
                         <th className="Web"  style={{textAlign:"center",paddingLeft:"40px",borderTopLeftRadius:"30px",borderBottomLeftRadius:"3px"}}>Rank</th>
                         <th className="Web"  >UserName</th>
                         <th className="Web w3"  style={{borderTopRightRadius:"30px",borderBottomRightRadius:"0px"}}>Valuation</th>
                         {/* <th>Body</th> */}
                    </tr>
                     </thead>
                     <tbody >
                        {
                          Datadisplay.map((tdata,i) => (
                                <tr className="T3" >
                                    <td className="Web1"  >#{tdata.id}</td>
                                    <td className="Web1">{tdata.name}</td>
                                    <td className="Web1 w3" >{tdata.email}</td>
                                    
                                </tr>
                            
                          ))
                        }

                     </tbody>
                 </table>  
                 {/* <div>Chef wants to buy a stock whose price was S rupees when the market opened. He will buy the stock if and only if its price is in the range [A,B]. The price of the stock has changed by C% by the time he was trying to buy the stock. Will he be able to buy the stock?</div> */}
                 <ReactPaginate
                    previousLabel={ "Prev"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>

            </div>
        )
    }
}

export default Table