---
tag: RBS3Q22V9C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h57650
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66301
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
For any complex number $w = a + bi$ , $|w|$ is defined to be the real number $\sqrt{a^2 + b^2}$ . If $w = \cos{40^\circ} + i\sin{40^\circ}$ , then
$$ |w + 2w^2 + 3w^3 + \cdots + 9w^9|^{-1} $$
equals $\textbf{(A)}\ \frac{1}{9}\sin{40^\circ} \textbf{(B)}\ \frac{2}{9}\sin{20^\circ} \textbf{(C)}\ \frac{1}{9}\cos{40^\circ} \textbf{(D)}\ \frac{1}{18}\cos{20^\circ} \textbf{(E)}\text{ none of these}$
