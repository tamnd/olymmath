---
tag: 8JPZ9DCCAV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2026 China National Olympiad
    url: https://artofproblemsolving.com/community/c6h3723325
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo/2026
    source: hf-ai-mo-aops
    label: 2026 China National Olympiad
---
Define the subsets of the complex numbers $\mathbb{C}$ :
$$ A = \{ z \in \mathbb{C} \mid z = re^{i\theta},\ r \ge 0,\ \theta \in [ 0, \pi/41] \}, $$
$$ B = \{ z \in \mathbb{C} \mid z = x + iy,\ x, y \in \mathbb{R},\ |x - y| < 2025 \}, $$
where $i$ is the imaginary unit, and $re^{i\theta} = r(\cos \theta + i \sin \theta)$ .

Find all complex-coefficient polynomials $P(z)$ such that for every $z \in A$ , we have $P(z) \in B$ .
