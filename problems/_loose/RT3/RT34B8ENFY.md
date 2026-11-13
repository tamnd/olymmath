---
tag: RT34B8ENFY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163129
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=50
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2013
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2013 - First Round
---
Prove that for any real numbers $a$ and $b$, the inequality

$$
\left(a + ab - b^2\right)^2 + ab^2(a + 2) \geq 0
$$

holds. When does equality hold?
