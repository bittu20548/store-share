import { useState } from "react";
import axios from "axios";

import Button from "../component/button";
import Input from "../input";

type Props = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
};

export default function AddContentModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [type, setType] = useState("");

  async function addContent() {
    try {
      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:4000/api/v1/content",
        {
          title,
          link,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Content Added!");

      setTitle("");
      setLink("");
      setType("");

      onSuccess();
      onClose();
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-[400px] rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-5">Add Content</h2>

        <div className="space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Input
            placeholder="Link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <Input
            placeholder="Type (youtube/twitter)"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />

          <div className="flex gap-3">
            <Button text="Add" onClick={addContent} fullWidth />

            <Button
              text="Cancel"
              variant="secondary"
              onClick={onClose}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
}