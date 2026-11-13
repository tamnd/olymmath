---
tag: E3KZ3HPSMN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the blackboard, there is a positive integer $n$. Two people, A and B, take turns to operate on it, with A starting first. When it is A's turn, if the number on the blackboard is $k$, then A erases it and replaces it with $\frac{k}{2} 、 \frac{k}{4} 、 3 k$ (only the first or second choice is allowed if $\frac{k}{2}$ or $\frac{k}{4}$ is an integer). When it is B's turn, if the number on the blackboard is $k$, then B erases it and replaces it with $k+1 、 k-1$. If anyone (whether A or B) writes the positive integer 3 on the blackboard, A wins. Try to determine: For which positive integers $n$, does A have a winning strategy?
