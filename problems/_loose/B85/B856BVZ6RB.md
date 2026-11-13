---
tag: B856BVZ6RB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 AMC 10
    url: https://artofproblemsolving.com/community/c6h527910
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64267
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=255895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2002 AMC 10
---
Under the new AMC 10, 12 scoring method, $6$ points are given for each correct answer, $2.5$ points are given for each unanswered question, and no points are given for an incorrect answer. Some of the possible scores between $0$ and $150$ can be obtained in only one way, for example, the only way to obtain a score of $146.5$ is to have 24 correct answers and one unanswered question. Some scores can be obtained in exactly two ways; for example, a score of $104.5$ can be obtained with $17$ correct answers, $1$ unanswered question, and $7$ incorrect, and also with $12$ correct answers and $13$ unanswered questions. There are three scores that can be obtained in exactly three ways. What is their sum? $\textbf{(A) }175 \textbf{(B) }179.5 \textbf{(C) }182 \textbf{(D) }188.5 \textbf{(E) }201$
