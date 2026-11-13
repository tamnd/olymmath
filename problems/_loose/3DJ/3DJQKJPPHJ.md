---
tag: 3DJQKJPPHJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 Flanders Math Olympiad
    url: https://artofproblemsolving.com/community/c6h2984034
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=31590
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230771
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: be-vwo/1987
    source: hf-ai-mo-aops
    label: 1987 Flanders Math Olympiad
---
Two parallel lines $a$ and $b$ meet two other lines $c$ and $d$ . Let $A$ and $A'$ be the points of intersection of $a$ with $c$ and $d$ , respectively. Let $B$ and $B'$ be the points of intersection of $b$ with $c$ and $d$ , respectively. If $X$ is the midpoint of the line segment $A A'$ and $Y$ is the midpoint of the segment $BB'$ , prove that $$ |XY| \le \frac{|AB|+|A'B'|}{2}. $$
