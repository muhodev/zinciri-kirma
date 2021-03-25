import { Modal, Input } from "components";
import { useState } from "react";
import { EventTabs } from "./EventTabs";

export function NewEvent(props) {
  const [title, setTitle] = useState("");
  const [eventType, setEventType] = useState("Hedef");
  return (
    <Modal title={`${eventType} oluştur`} close={props.close}>
      <div>
        <div></div>
        <div>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Başlık ekleyin"
          />
        </div>
      </div>
      <EventTabs
        activeTab={eventType}
        changeTab={(type) => setEventType(type)}
      />
    </Modal>
  );
}
