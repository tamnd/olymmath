---
tag: BNCE8QTZ92
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Conclude the proof given that $M P \cdot M Q=M B^{2}$.

The relation $M P \cdot M Q=M B^{2}$ in turn implies that triangle $\triangle M B P$ is similar to triangle $\triangle M Q B$, and in particular $\angle M B P=\angle M Q B$. Keeping into account that $\angle M C B=$ $\angle M B A$, we finally conclude that

$$
\angle Q B C=\angle M Q B-\angle M C B=\angle M B P-\angle M B A=\angle P B A
$$

as required.
