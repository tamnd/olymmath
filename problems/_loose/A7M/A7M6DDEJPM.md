---
tag: A7M6DDEJPM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620290
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16811
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218451
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $ABC$ be a triangle with $AB = 7, BC = 5,$ and $CA = 6$ . Let $D$ be a variable point on segment $BC$ , and let the perpendicular bisector of $AD$ meet segments $AC, AB$ at $E, F,$ respectively. It is given that there is a point $P$ inside $\triangle ABC$ such that $\frac{AP}{PC} = \frac{AE}{EC}$ and $\frac{AP}{PB} = \frac{AF}{FB}$ . The length of the path traced by $P$ as $D$ varies along segment $BC$ can be expressed as $\sqrt{\frac{m}{n}}\sin^{-1}\left(\sqrt \frac 17\right)$ , where $m$ and $n$ are relatively prime positive integers, and angles are measured in radians. Compute $100m + n$ .

*Proposed by Edward Wan*
