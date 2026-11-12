---
tag: TNMY4PRB4D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Latvia National Olympiad
    url: https://artofproblemsolving.com/community/c6h1276672
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14372
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: lv-mo/2016
    source: hf-ai-mo-aops
    label: 2016 Latvia National Olympiad
---
The integer sequence $(s_i)$ "having pattern 2016'" is defined as follows: $\circ$ The first member $s_1$ is 2. $\circ$ The second member $s_2$ is the least positive integer exceeding $s_1$ and having digit 0 in its decimal notation. $\circ$ The third member $s_3$ is the least positive integer exceeding $s_2$ and having digit 1 in its decimal notation. $\circ$ The third member $s_3$ is the least positive integer exceeding $s_2$ and having digit 6 in its decimal notation.
The following members are defined in the same way. The required digits change periodically: $2 \rightarrow 0 \rightarrow 1 \rightarrow 6 \rightarrow 2 \rightarrow 0 \rightarrow \ldots$ . The first members of this sequence are the following: $2; 10; 11; 16; 20; 30; 31; 36; 42; 50$ .
Does this sequence contain a) 2001, b) 2006?
