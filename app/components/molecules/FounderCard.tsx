import React from "react";
import Image from "next/image";
import Card from "./Card";
import Tag from "../atoms/Tag";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  credentials?: string[];
}

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div
      style={{
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, var(--cyan-300), var(--cyan-600))",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        boxShadow: "0 0 24px rgba(30, 159, 212, 0.25)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "2rem",
          color: "var(--navy-900)",
          fontWeight: 700,
        }}
      >
        {initials}
      </span>
    </div>
  );
}

export default function FounderCard({
  name,
  role,
  bio,
  imageSrc,
  credentials,
}: FounderCardProps) {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "1rem",
        }}
      >
        {/* Photo or Placeholder */}
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={name}
            width={120}
            height={120}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              flexShrink: 0,
            }}
          />
        ) : (
          <AvatarPlaceholder name={name} />
        )}

        {/* Info */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "var(--text-h3)",
              color: "var(--white)",
              margin: "0 0 0.35rem",
              lineHeight: "var(--lh-compact)",
            }}
          >
            {name}
          </h3>

          <Tag style={{ display: "block", marginBottom: "0.75rem" }}>{role}</Tag>

          <p
            style={{
              fontSize: "var(--text-sm)",
              color: "var(--white-dim)",
              lineHeight: "var(--lh-base)",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {bio}
          </p>

          {/* Credentials */}
          {credentials && credentials.length > 0 && (
            <ul
              style={{
                marginTop: "0.75rem",
                paddingLeft: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
              }}
            >
              {credentials.map((c) => (
                <li
                  key={c}
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--white-muted)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Card>
  );
}
