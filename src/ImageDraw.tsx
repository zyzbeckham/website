import React, { Component, MouseEvent } from 'react'
import SignatureCanvas from 'react-signature-canvas'

interface IImageState {
    image: string | undefined
}

interface ImageProp { }

class ImageDraw extends Component<ImageProp, IImageState> {

    protected saveableCanvas: SignatureCanvas | null = null

    constructor(prop : ImageProp) {
        super(prop);
        this.state = {
            image: ""
        }
    }

    saveImage = (event:MouseEvent) => {
        event.stopPropagation();
        this.setState({
            image : this.saveableCanvas?.toDataURL('image/jpeg')
        })
        this.saveableCanvas?.clear();
    }

    render() {
        return (
            <div>
                <SignatureCanvas  ref={canvasDraw => this.saveableCanvas = canvasDraw} canvasProps={{width: 500, height: 200, className: 'sigCanvas'}}  penColor={"red"} backgroundColor={'white'}/>
                <button onClick={this.saveImage}>保存</button>
                <img src={this.state.image} alt={'你好'}/>
            </div>)
    }

}

export default ImageDraw;