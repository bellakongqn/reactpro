import React, { Component } from 'react';
import './Drag.css'
import DragContainer from './DragContainer'
import DragItem from './DragItem'

const STATUS_CODE = {
    STATUS_TODO: '待处理',
    STATUS_DOING: '进行中',
    STATUS_DONE: '已完成'
}

const STATUS_TODO = 'STATUS_TODO';
const STATUS_DOING = 'STATUS_DOING';
const STATUS_DONE = 'STATUS_DONE';

let tasks = [{
    id: 0,
    status: STATUS_TODO,
    title: '每周七天阅读五次，每次阅读完要做100字的读书笔记',
    username: '小夏',
    point: 10
}, {
    id: 1,
    status: STATUS_DOING,
    title: '每周七天健身4次，每次健身时间需要大于20分钟',
    username: '橘子🍊',
    point: 5
}, {
    id: 2,
    status: STATUS_TODO,
    title: '单词*100',
    username: '┑(￣Д ￣)┍',
    point: 2
}, {
    id: 3,
    status: STATUS_DONE,
    title: '单词*150',
    username: '┑(￣Д ￣)┍',
    point: 2
}, {
    id: 4,
    status: STATUS_TODO,
    title: '单词*200',
    username: '┑(￣Д ￣)┍',
    point: 2
}, {
    id: 5,
    status: STATUS_TODO,
    title: '单词*250',
    username: '┑(￣Д ￣)┍',
    point: 2
}]

class Drag extends Component {

    state={
        tasks: tasks,
        activeId: null
    }

    dragTo = (status) => {
        let { tasks,  activeId} = this.state;
        let task = tasks[activeId];
        if (task.status !== status) {
            task.status = status;
            this.setState({
                tasks: tasks
            })
        }
        console.log(this.state.tasks)
        this.cancelSelect();
    }
       
   
    onDragStart = (id) => {
        this.setState({
            activeId: id
        })
    }

    cancelSelect = () => {
        this.setState({
            activeId: null
        })
    }




    render() {

        let { tasks, activeId } = this.state;
        return (
            <div className='drag-container'>
                {
                    Object.keys(STATUS_CODE).map(status  => {
                        return(
                        <DragContainer
                            status={status} 
                            key={status} 
                            dragTo={this.dragTo}
                            canDragIn={activeId !== null && tasks[activeId].status !== status}
                            // 是否可以放置

                        >
                            {
                                tasks.filter(item => item.status === status).map(item  =>{
                                    return(
                                        <DragItem
                                        onDragStart={this.onDragStart}
                                        onDragEnd={this.cancelSelect}
                                        key={item.id}
										active={item.id === activeId}
                                        id={item.id}
                                        title={item.title} 
                                        point={item.point} 
                                        username={item.username}
                                        status={item.status}
                                         />
                                    )
                                })
                            }
                            
                        </DragContainer>
                        )
                    })
                }
            </div>
        );
    }
}

export default Drag;