---
tag: VRYCVE0Z9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252282
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66185
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199210
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
Alice, Bob, and Carol repeatedly take turns tossing a die. Alice begins; Bob always follows Alice; Carol always follows Bob; and Alice always follows Carol. Find the probability that Carol will be the first one to toss a six. (The probability of obtaining a six on any toss is $ \frac{1}{6}$ , independent of the outcome of any other toss.)

$ \textbf{(A)}\ \frac{1}{3}
\textbf{(B)}\ \frac{2}{9}
\textbf{(C)}\ \frac{5}{18}
\textbf{(D)}\ \frac{25}{91}
\textbf{(E)}\ \frac{36}{91}$
