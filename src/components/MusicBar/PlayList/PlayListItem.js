import React from 'react'
import { connect } from 'react-redux'
import { setAudioData, deletePlayList } from '@/store/actions'

class playListItem extends React.Component {
    render() {
        const { json, audio_data } = this.props
        return (
            <li className={`playList-item ${audio_data.sound.id === json.sound.id ? 'playing' : ''}`} key={json.sound.id} onClick={this.handlePlay}>
                <div className="item-name">
                    <div className="name-icon-container">
                        <div className={`name-icon ${audio_data.sound.id === json.sound.id ? 'my-icon-circle-play' : 'smallCircle'}`}></div>
                    </div>
                    <div className={`name-value ${audio_data.sound.id === json.sound.id ? 'onPlay' : ''}`}>{json.sound.name}</div>
                </div>
                <div className="item-close my-icon-close" onClick={this.handleDelete}></div>
            </li>
        )
    }
    handlePlay = () => {
        const item = this.props.json
        this.props.setAudioData(item)
        this.props.handlePlayListOpen()
    }
    handleDelete = (e) => {
        e.stopPropagation()
        const item = this.props.json
        this.props.deletePlayList(item)
    }
}

const mapStateToProps = (state) => {
    return {
        audio_data: state.audio_data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePlayList: (data) => {
            dispatch(deletePlayList(data))
        },
        setAudioData: (data) => {
            dispatch(setAudioData(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(playListItem)
