---
tag: 1EPWNJGFKK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265394
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of 8-tuples of binary inputs $\{A, B, C, D, E, F, G, H\}$ such that $$ \{ (A \text{ AND } B)\text{ OR } (C \text{ AND } D)\} \text{ AND } \{ (E \text{ AND } F)\text{ OR } (G \text{ AND } H)\}$$$$ = \{ (A \text{ OR } B)\text{ AND } (C \text{ OR } D)\} \text{ OR } \{ (E \text{ OR } F)\text{ AND } (G \text{ OR } H)\}$$
The AND gates produce an output that is ON only if both the inputs are ON, and the OR gates produce an output that is OFF only if both inputs are OFF.

*2022 CCA Math Bonanza Individual Round #12*
