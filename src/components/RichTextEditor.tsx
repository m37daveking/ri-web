"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useEffect, useCallback } from "react";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
}

const MenuButton = ({
  onClick,
  isActive = false,
  disabled = false,
  children,
  title,
}: {
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  title: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    title={title}
    className={`px-2 py-1 text-sm rounded transition-colors ${
      isActive
        ? "bg-[var(--accent)] text-black"
        : "hover:bg-[var(--background-secondary)]"
    } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
  >
    {children}
  </button>
);

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [2, 3],
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[var(--accent)] underline",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "max-w-full rounded-lg my-4",
        },
      }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose prose-sm max-w-none min-h-[300px] px-4 py-3 focus:outline-none",
      },
    },
  });

  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const setLink = useCallback(() => {
    if (!editor) return;

    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    if (url === null) return;

    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  const addImage = useCallback(() => {
    if (!editor) return;

    const url = window.prompt("Image URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return (
      <div className="bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg h-[400px] flex items-center justify-center">
        <span className="text-[var(--foreground-muted)]">Loading editor...</span>
      </div>
    );
  }

  return (
    <div className="border border-[var(--border)] rounded-lg overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[var(--border)] bg-[var(--background-secondary)]">
        {/* Text formatting */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive("bold")}
          title="Bold"
        >
          <strong>B</strong>
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive("italic")}
          title="Italic"
        >
          <em>I</em>
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive("strike")}
          title="Strikethrough"
        >
          <s>S</s>
        </MenuButton>

        <div className="w-px h-5 bg-[var(--border)] mx-1" />

        {/* Headings */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive("heading", { level: 2 })}
          title="Heading 2"
        >
          H2
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive("heading", { level: 3 })}
          title="Heading 3"
        >
          H3
        </MenuButton>

        <div className="w-px h-5 bg-[var(--border)] mx-1" />

        {/* Lists */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive("bulletList")}
          title="Bullet List"
        >
          • List
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive("orderedList")}
          title="Numbered List"
        >
          1. List
        </MenuButton>

        <div className="w-px h-5 bg-[var(--border)] mx-1" />

        {/* Block elements */}
        <MenuButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive("blockquote")}
          title="Quote"
        >
          &ldquo; Quote
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive("codeBlock")}
          title="Code Block"
        >
          {"</>"}
        </MenuButton>

        <div className="w-px h-5 bg-[var(--border)] mx-1" />

        {/* Links and images */}
        <MenuButton
          onClick={setLink}
          isActive={editor.isActive("link")}
          title="Add Link"
        >
          Link
        </MenuButton>
        <MenuButton onClick={addImage} title="Add Image">
          Image
        </MenuButton>

        <div className="w-px h-5 bg-[var(--border)] mx-1" />

        {/* Undo/Redo */}
        <MenuButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          title="Undo"
        >
          ↩
        </MenuButton>
        <MenuButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          title="Redo"
        >
          ↪
        </MenuButton>
      </div>

      {/* Editor content */}
      <EditorContent editor={editor} />

      {/* Styles for the editor content */}
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
        }
        .ProseMirror p {
          margin: 0.75em 0;
        }
        .ProseMirror h2 {
          font-size: 1.5em;
          font-weight: 600;
          margin: 1em 0 0.5em;
        }
        .ProseMirror h3 {
          font-size: 1.25em;
          font-weight: 600;
          margin: 1em 0 0.5em;
        }
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5em;
          margin: 0.75em 0;
        }
        .ProseMirror li {
          margin: 0.25em 0;
        }
        .ProseMirror blockquote {
          border-left: 3px solid var(--accent);
          padding-left: 1em;
          margin: 1em 0;
          color: var(--foreground-muted);
        }
        .ProseMirror pre {
          background: var(--background-secondary);
          padding: 1em;
          border-radius: 0.5em;
          overflow-x: auto;
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        .ProseMirror code {
          background: var(--background-secondary);
          padding: 0.2em 0.4em;
          border-radius: 0.25em;
          font-family: var(--font-mono);
          font-size: 0.9em;
        }
        .ProseMirror pre code {
          background: none;
          padding: 0;
        }
        .ProseMirror a {
          color: var(--foreground);
          text-decoration: underline;
        }
        .ProseMirror a:hover {
          color: #7CFC7C;
        }
        .ProseMirror img {
          max-width: 100%;
          border-radius: 0.5em;
          margin: 1em 0;
        }
        .ProseMirror:focus {
          outline: none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          color: var(--foreground-subtle);
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
