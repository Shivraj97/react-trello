import React from 'react';
import styled from 'styled-components';
import { 
  IoIosCopy as CopyIcon, 
  IoIosArchive as ArchiveIcon 
} from 'react-icons/io';
import Button from './Button';
import Form from './Form';

const CardEditorContainer = styled.div`
  background: rgba(0,0,0,.6);
  color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
`;

const Editor = styled.div`
  position: absolute;
  top: ${props => props.position.top + "px"};
  left: ${props => props.position.left + "px"};
  display: flex;
  flex-direction: row;
`;

const EditorButtons = styled.ul`
  list-style: none;
  padding-left: 10px;
`;

const EditorButton = styled.li`
  margin-bottom: 5px;
`;

const CardEditor = (props) => {
  return (
    <CardEditorContainer>
      <Editor position={props.position}>
        <Form 
          type='editor'
          buttonText="Save"
          initialValue={props.initialValue}
          onClickSubmit={() => null}
        />
        <EditorButtons>
          <EditorButton>
            <Button 
              icon={<CopyIcon />}
              text="Copy" 
              type="editor"
            />
          </EditorButton>
          <EditorButton>
            <Button 
              icon={<ArchiveIcon />}
              text="Archive"
              type="editor"
            />
          </EditorButton>
        </EditorButtons>
      </Editor>
    </CardEditorContainer>
  );
};

export default CardEditor;
