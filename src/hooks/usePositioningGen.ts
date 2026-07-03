import { useState, useCallback } from "react";

const BANNED_WORDS = [
  "seamless",
  "seamlessly",
  "end-to-end",
  "groundbreaking",
  "revolutionary",
  "cutting-edge",
  "game-changing",
  "game changing",
  "best-in-class",
  "world-class",
  "synergy",
  "synergies",
  "paradigm",
  "unparalleled",
];

interface PositioningInput {
  // Product mode
  "d-name"?: string;
  "d-cat"?: string;
  "d-icp"?: string;
  "d-prob"?: string;
  "d-diff"?: string;
  "d-out"?: string;
  // Feature mode
  "d-fname"?: string;
  "d-parent"?: string;
  "d-fpersona"?: string;
  "d-fprob"?: string;
  "d-fhow"?: string;
  "d-fdiff"?: string;
}

function scrubBanned(text: string): { out: string; flagged: string[] } {
  let out = text;
  const flagged: string[] = [];

  BANNED_WORDS.forEach((word) => {
    const regex = new RegExp(`\\b${word.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}\\b`, "gi");
    if (regex.test(out)) {
      flagged.push(word);
      out = out.replace(regex, "");
    }
  });

  out = out.replace(/\s{2,}/g, " ").replace(/\s+([,.])/g, "$1");
  return { out, flagged: [...new Set(flagged.map((w) => w.toLowerCase()))] };
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function stripDot(s: string): string {
  return s.replace(/\.$/, "");
}

export function usePositioningGen() {
  const [mode, setMode] = useState<"product" | "feature">("product");
  const [output, setOutput] = useState<string>("");
  const [governanceNote, setGovernanceNote] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generate = useCallback(() => {
    setIsGenerating(true);
    setOutput("");
    setGovernanceNote("");

    // Simulate thinking delay
    setTimeout(() => {
      let blocks: Array<[string, string]> = [];
      let allFlags: string[] = [];

      if (mode === "product") {
        const name = document.getElementById("d-name")?.getAttribute("value") || "Your product";
        const cat = document.getElementById("d-cat")?.getAttribute("value") || "solution";
        const icp = document.getElementById("d-icp")?.getAttribute("value") || "your customers";
        const prob = document.getElementById("d-prob")?.getAttribute("value") || "a costly, unsolved problem";
        const diff = document.getElementById("d-diff")?.getAttribute("value") || "a distinct capability";
        const out = document.getElementById("d-out")?.getAttribute("value") || "better outcomes";

        const tagline = `${cap(name.split(" ")[0])}. ${cap(stripDot(out))}, verified.`;
        const positioning = `For ${icp} who struggle with ${stripDot(prob).toLowerCase()}, ${name} is a ${cat} that delivers ${stripDot(diff)}. Unlike commoditized alternatives that force a trade-off between speed and trust, ${name} produces ${out} you can rely on.`;
        const uvp = [
          `Differentiated where it counts — ${stripDot(diff)}.`,
          `Built for ${icp}, mapped to how they actually buy and adopt.`,
          `Directly resolves ${stripDot(prob).toLowerCase()}.`,
          `Outcome-led: every claim ladders up to ${out}.`,
          `Proof over hype — results backed by data, not adjectives.`,
        ];

        const s1 = scrubBanned(tagline);
        const s2 = scrubBanned(positioning);
        const s3 = uvp.map(scrubBanned);

        allFlags = [...s1.flagged, ...s2.flagged, ...s3.flatMap((x) => x.flagged)];
        blocks = [
          ["tagline", s1.out],
          ["positioning statement", s2.out],
          ["unique value proposition", s3.map((x, i) => `  ${i + 1}. ${x.out}`).join("\n")],
        ];
      } else {
        const fname = document.getElementById("d-fname")?.getAttribute("value") || "the new feature";
        const parent = document.getElementById("d-parent")?.getAttribute("value") || "the product";
        const persona = document.getElementById("d-fpersona")?.getAttribute("value") || "users";
        const prob = document.getElementById("d-fprob")?.getAttribute("value") || "a recurring friction";
        const how = document.getElementById("d-fhow")?.getAttribute("value") || "a smarter workflow";
        const diff = document.getElementById("d-fdiff")?.getAttribute("value") || "a real advantage";

        const note = `${parent} now includes ${fname}. For ${persona} who deal with ${stripDot(prob).toLowerCase()}, ${fname} ${stripDot(how).toLowerCase()} — with ${stripDot(diff).toLowerCase()}. Turn it on from your ${parent} settings to start seeing the benefit today.`;

        const s = scrubBanned(note);
        allFlags = s.flagged;
        blocks = [["feature release note", s.out]];
      }

      // Typewriter effect
      const fullText = blocks.map((b) => `«${b[0]}»\n${b[1]}`).join("\n\n");
      let i = 0;

      const typeOut = () => {
        if (i <= fullText.length) {
          setOutput(fullText.slice(0, i));
          i += Math.max(1, Math.round(Math.random() * 2));
          setTimeout(typeOut, 11);
        } else {
          setOutput(fullText);
          setGovernanceNote(
            allFlags.length
              ? `[governance] removed ${allFlags.length} banned term${allFlags.length > 1 ? "s" : ""}: ${allFlags.join(", ")}`
              : `[governance] banned-words check passed — no filler detected`
          );
          setIsGenerating(false);
        }
      };

      typeOut();
    }, 650);
  }, [mode]);

  return {
    mode,
    setMode,
    output,
    governanceNote,
    isGenerating,
    generate,
  };
}