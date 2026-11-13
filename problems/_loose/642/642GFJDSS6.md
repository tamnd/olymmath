---
tag: 642GFJDSS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 AMC 10
    url: https://artofproblemsolving.com/community/c6h626887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12214
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201346
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2015 AMC 10
---
Aaron the ant walks on the coordinate plane according to the following rules. He starts at the origin $p_0=(0,0)$ facing to the east and walks one unit, arriving at $p_1=(1,0)$ . For $n=1,2,3,\dots$ , right after arriving at the point $p_n$ , if Aaron can turn $90^\circ$ left and walk one unit to an unvisited point $p_{n+1}$ , he does that. Otherwise, he walks one unit straight ahead to reach $p_{n+1}$ . Thus the sequence of points continues $p_2=(1,1), p_3=(0,1), p_4=(-1,1), p_5=(-1,0)$ , and so on in a counterclockwise spiral pattern. What is $p_{2015}$ ? $ \textbf{(A) } (-22,-13) \textbf{(B) } (-13,-22) \textbf{(C) } (-13,22) \textbf{(D) } (13,-22) \textbf{(E) } (22,-13) $
