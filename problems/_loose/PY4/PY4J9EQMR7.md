---
tag: PY4J9EQMR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Federal Competition For Advanced Students, Part 2
    url: https://artofproblemsolving.com/community/c6h483098
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7879
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209963
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Austria/train/0000.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: at-oemo/2012
    source: hf-ai-mo-aops
    label: 2012 Federal Competition For Advanced Students, Part 2
  - at: at-oemo
    source: hf-mathnet
    label: Austria Austrian Mathematical Olympiad
---
Determine the maximum value of $m$ , such that the inequality

$$ (a^2+4(b^2+c^2))(b^2+4(a^2+c^2))(c^2+4(a^2+b^2)) \ge m $$

holds for every $a,b,c \in \mathbb{R} \setminus \{0\}$ with $\left|\frac{1}{a}\right|+\left|\frac{1}{b}\right|+\left|\frac{1}{c}\right|\le 3$ .
When does equality occur?
