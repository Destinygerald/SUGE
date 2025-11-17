import "../style.css";
import "../style.mobile.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { RiH1, RiH2, RiH3 } from "react-icons/ri";
import {
  MdFormatBold,
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatItalic,
  MdFormatStrikethrough,
} from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { FaHighlighter } from "react-icons/fa";
import Highlight from "@tiptap/extension-highlight";
import { useEffect } from "react";
import Link from "@tiptap/extension-link";

function Menubar({ editor }) {
  if (!editor) {
    return null;
  }

  const Options = [
    {
      icon: <RiH1 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      pressed: editor.isActive("heading", { level: 1 }),
    },
    {
      icon: <RiH2 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      pressed: editor.isActive("heading", { level: 2 }),
    },
    {
      icon: <RiH3 />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      pressed: editor.isActive("heading", { level: 3 }),
    },
    {
      icon: <MdFormatBold />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      pressed: editor.isActive("bold"),
    },
    {
      icon: <MdFormatItalic />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      pressed: editor.isActive("italic"),
    },
    {
      icon: <MdFormatStrikethrough />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      pressed: editor.isActive("strike"),
    },
    {
      icon: <MdFormatAlignLeft />,
      onClick: () => editor.chain().focus().setTextAlign("left").run(),
      pressed: editor.isActive({ textAlign: "left" }),
    },
    {
      icon: <MdFormatAlignCenter />,
      onClick: () => editor.chain().focus().setTextAlign("center").run(),
      pressed: editor.isActive({ textAlign: "center" }),
    },
    {
      icon: <MdFormatAlignRight />,
      onClick: () => editor.chain().focus().setTextAlign("right").run(),
      pressed: editor.isActive({ textAlign: "right" }),
    },
    {
      icon: <MdFormatListBulleted />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      pressed: editor.isActive("bulletList"),
    },
    {
      icon: <MdFormatListNumbered />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      pressed: editor.isActive("orderedList"),
    },
    {
      icon: <FaHighlighter />,
      onClick: () => editor.chain().focus().toggleHighlight().run(),
      pressed: editor.isActive("highlight"),
    },
    // {
    //     icon: <IoIosLink />,
    //     onClick: () => editor.chain().focus().toggleHighlight().run(),
    //     pressed: editor.isActive("highlight")
    // }
  ];

  return (
    <div className="control-group">
      {Options.map((option, index) => (
        <div
          onClick={option.onClick}
          key={index}
          className={
            option.pressed ? "control-group-pressed" : "control-group-btn"
          }
        >
          {option.icon}
        </div>
      ))}
    </div>
  );
}

export function TextEditor({ onChange, value, name }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: "editor-bullet-list",
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: "editor-ordered-list",
          },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
      Link.configure({
        openOnClick: true, // Click opens link
        linkOnPaste: true, // Automatically create link from pasted URL
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank", // Open links in new tab
        },
      }),
    ],

    content: value,

    editorProps: {
      attributes: {
        class: "text-editor",
      },
    },

    onBlur: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  // useEffect(() => {

  //     console.log(value)

  //     setTimeout(() => {
  //         if (value) {
  //             console.log('setting text')
  //             editor.commands.setContent(`${value}`)
  //         }
  //     }, 600)

  // }, [])

  useEffect(() => {
    // console.log('value changed')
    editor.commands.setContent(`${value}`);
  }, [value]);

  return (
    <div className="text-editor-cnt">
      <Menubar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
