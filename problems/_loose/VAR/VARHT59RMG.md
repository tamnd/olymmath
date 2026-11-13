---
tag: VARHT59RMG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h82952
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23008
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2003
    source: hf-ai-mo-aops
    label: 2003 IberoAmerican
---
Pablo copied from the blackboard the problem:

Consider all the sequences of $2004$ real numbers $(x_0,x_1,x_2,\dots, x_{2003})$ such that: $x_0=1, 0\le x_1\le 2x_0,0\le x_2\le 2x_1\ldots ,0\le x_{2003}\le 2x_{2002}$ . From all these sequences, determine the sequence which minimizes $S=\cdots$

As Pablo was copying the expression, it was erased from the board. The only thing that he could remember was that $S$ was of the form $S=\pm x_1\pm x_2\pm\cdots\pm x_{2002}+x_{2003}$ . Show that, even when Pablo does not have the complete statement, he can determine the solution of the problem.
