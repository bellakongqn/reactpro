import React from 'react';
import { Icon } from 'antd';
import Modal from '../Modal/Modal'
import './Upload.css'

// 文件上传

class Upload extends React.PureComponent {

    state={
        imgFile:"",
        imgSrc:'http://pic1.win4000.com/pic/7/77/a8ba593e7c_250_300.jpg',
        // imgSrc:'',
        naturalHeight:'',
        naturalWidth:'',
        previewShow:false,
    }

    hadleImgChange = e =>{
        console.log(e.target.files[0])
        this.setState({
            imgFile: e.target.files[0].name,
        })
        //  reader.onload改变this指向
        var that = this
        var reader = new FileReader();
        // 图片文件转换为base64
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = function(){
            that.setState({
                imgSrc:this.result
            })
        }
        
    }

    // 删除
    handleDelete =() =>{
        this.setState({
            imgFile:'',
            imgSrc:'',
        })
    }

    // 预览
    handlePreview= () =>{
          this.setState({
              previewShow:true
          })
    }

    handleConfirm=() =>{
        this.setState({
            previewShow:false
        })
    }

    handleClose=() =>{
        this.setState({
            previewShow:false
        })
    }


    render() {
        const {imgFile, imgSrc,previewShow} = this.state
        return (
            <div className="container">
                <div className="img-box">
                    <input type="file" className="imgFile" onChange={this.hadleImgChange} accept="image/*" />
                    <Icon type="plus" className="img-add-icon" />
                    {imgFile?<div className="warining-text">{imgFile}</div>:<div className="warining-text">请上传文件</div>} 
                    {
                        imgSrc && (
                            <>
                                <div className="item"  id ="item" style={{backgroundImage: 'url(' + imgSrc + ')'}}></div>  
                                <Icon type="delete" className="deleteIcon" onClick={this.handleDelete}/>
                                <Icon type="eye" className="previewIcon" onClick={this.handlePreview} />
                            </>
                            
                        )
                    }   
                </div>
                <Modal visible={previewShow} title="图片详情" onClose={this.handleClose} onConfirm={this.handleConfirm} cancleText="确定" confirmText="取消" className="title">
                        <img  src={imgSrc} alt=""/>
                        {/* ewhvjg */}
                </Modal>
            </div>
        )
    }
}

export default Upload;