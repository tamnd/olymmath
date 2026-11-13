---
tag: G078XHE8PC
kind: problem
type: answer
answer: "106"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130215
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Encode the letters $a \sim z$ as $(\mathbf{a}=1, \mathbf{b}=2, \ldots, \mathbf{z}=26)$, so that each English word (all letters in the word are considered lowercase) can have the product $\mathbf{p}$ of the encodings of all its letters calculated. For example, for the word good, the corresponding $\mathbf{p}$ value is $7 \times 15 \times 15 \times 4=6300$ (since $g=7, o=15, d=4$). If a composite number cannot be represented as the $\mathbf{p}$ value of any word (regardless of whether the word is meaningful), such a composite number is called a "zhonghuan number". The smallest three-digit "zhonghuan number" is . $ $
