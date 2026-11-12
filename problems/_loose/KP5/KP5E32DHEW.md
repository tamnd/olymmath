---
tag: KP5E32DHEW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11017
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2003
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let $A B C$ be a scalene triangle with $B C=a, A C=b$ and $A B=c$, where $a_{r} b, c$ are positive integers. Prove that

$$
\left|a b^{2}+b c^{2}+c a^{2}-a^{2} b-b^{2} c-c^{2} a\right| \geq 2
$$
