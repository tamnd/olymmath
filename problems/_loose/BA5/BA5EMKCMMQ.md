---
tag: BA5EMKCMMQ
kind: problem
type: answer
answer: F_{\}\geq2r^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186294
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a triangle $A B C$ and two points $D, E$, it is assumed:

$D$ lies on the segment $B C$ and is different from $C$, $E$ lies on the segment $A C$ and is different from $C$.

The segment $D E$ passes through the incenter $M$ of the triangle $A B C$. The inradius of the triangle $A B C$ is $r$, and the area of the triangle $C D E$ is $F$.

Prove that under these assumptions, $F \geq 2 r^{2}$ always holds.
