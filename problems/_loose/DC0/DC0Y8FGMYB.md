---
tag: DC0Y8FGMYB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h22282
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66212
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257684
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
By definition, $ r! = r(r - 1) \cdots 1$ and $ \binom{j}{k} = \frac {j!}{k!(j - k)!}$ , where $ r,j,k$ are positive integers and $ k < j$ . If $ \binom{n}{1}, \binom{n}{2}, \binom{n}{3}$ form an arithmetic progression with $ n > 3$ , then $ n$ equals

$ \textbf{(A)}\ 5 \textbf{(B)}\ 7 \textbf{(C)}\ 9 \textbf{(D)}\ 11 \textbf{(E)}\ 12$
