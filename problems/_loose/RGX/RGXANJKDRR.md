---
tag: RGXANJKDRR
kind: problem
type: answer
answer: "36"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the box have dimensions $x \times y \times z$. Then the rope must have a length of $2 x+6 y+4 z$. But by the inequality of means,

$$
2 x+4 y+6 z \geqslant 3 \sqrt[3]{2 x \cdot 6 y \cdot 4 z}=6 \sqrt[3]{6 \cdot 37}>6 \sqrt[3]{6 \cdot 36}=36
$$
