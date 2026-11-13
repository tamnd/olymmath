---
tag: 7YW0DHMFMF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Q^+$ denote the set of positive rationals. Determine all functions $f : Q^+ \to Q^+$ that satisfy both of these conditions:
(i) $f(x)$ is an integer if and only if $x$ is an integer;
(ii) $f(f(xf(y)) + x) = yf(x) + x$ for all $x, y \in Q^+$.
