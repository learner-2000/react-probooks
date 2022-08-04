import React, { Component } from 'react'

export default class Book extends Component {
    selectType = (ele) => {
        let obj
        switch (ele.target.value) {
            case "read":
                obj = { type: "read", id: this.props.id }
                break;
            case "like":
                obj = { type: "like", id: this.props.id }
                break;
            case "dislike":
                obj = { type: "dislike", id: this.props.id }
                break;
            case "del":
                obj = { type: "all", id: this.props.id }
                break;
            default: break
        }
        this.props.setBook(obj);
    }
    render() {
        return (
            <div className="book-container">
                <img src={this.props.img} alt="" />
                <p className="bname">{this.props.title}</p>
                <p className="bauthor">{this.props.author}</p>
                <div className="arrow"></div>
                <select onChange={this.selectType}>
                    <option className="dis" value="non">Move to...</option>
                    <option value="read">Read &#128214;</option>
                    <option value="like">Like &#128077;</option>
                    <option value="dislike">Dislike &#128078;</option>
                    <option value="del">Delete &#10060;</option>
                </select>
            </div>
        )
    }
}