---
tag: JG2Q868REP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h607685
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11334
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213278
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2014
    source: hf-ai-mo-aops
    label: 2014 Iran MO (3rd Round)
---
A **word** is formed by a number of letters of the alphabet. We show words with capital letters. A **sentence** is formed by a number of words. For example if $A=aa$ and $B=ab$ then the sentence $AB$ is equivalent to $aaab$ . In this language, $A^n$ indicates $\underbrace{AA \cdots A}_{n}$ . We have an equation when two sentences are equal. For example $XYX=YZ^2$ and it means that if we write the alphabetic letters forming the words of each sentence, we get two equivalent sequences of alphabetic letters. An equation is **simplified**, if the words of the left and the right side of the sentences of the both sides of the equation are different. Note that every word contains one alphabetic letter at least. $\text{a})$ We have a simplified equation in terms of $X$ and $Y$ . Prove that both $X$ and $Y$ can be written in form of a power of a word like $Z$ .( $Z$ can contain only one alphabetic letter). $\text{b})$ Words $W_1,W_2,\cdots , W_n$ are the answers of a simplified equation. Prove that we can produce these $n$ words with fewer words. $\text{c})$ $n$ words $W_1,W_2,\cdots , W_n$ are the answers of a simplified system of equations. Define graph $G$ with vertices ${1,2 \cdots ,n}$ such that $i$ and $j$ are connected if in one of the equations, $W_i$ and $W_j$ be the two words appearing in the right side of each side of the equation.( $\cdots W_i = \cdots W_j$ ). If we denote by $c$ the number of connected components of $G$ , prove that these $n$ words can be produced with at most $c$ words.

*Proposed by Mostafa Einollah Zadeh Samadi*
