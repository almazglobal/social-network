import React from 'react';

type ProfileStatusProps = {
    status: string
    updateUserStatusProfile: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusProps, { editMode: boolean }> {
    statusInputRef = React.createRef<HTMLInputElement>()
    state = {
        editMode: false,
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deActivateEditMode = () => {
        this.setState({
            editMode: false

        })
        this.props.updateUserStatusProfile(this.statusInputRef.current!.value)
    }

    render() {

        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input ref={this.statusInputRef} onBlur={this.deActivateEditMode}
                               autoFocus type="text"/>
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
            </div>
        )
    }
};
