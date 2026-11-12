---
tag: RZR16T7SEN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h52818
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44290
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (3rd Round)
---
Suppose we have some proteins that each protein is a sequence of 7 "AMINO-ACIDS" $A,\ B,\ C,\ H,\ F,\ N$ . For example $AFHNNNHAFFC$ is a protein. There are some steps that in each step an amino-acid will change to another one. For example with the step $NA\rightarrow N$ the protein $BANANA$ will cahnge to $BANNA$ ("in Persian means workman"). We have a set of allowed steps that each protein can change with these steps. For example with the
set of steps:
$ 1)\ AA\longrightarrow A 2)\ AB\longrightarrow BA 3)\ A\longrightarrow \text{null}$
Protein $ABBAABA$ will change like this:
$ ABB\underline{AA}BA \underline{AB}BABA B\underline{AB}ABA BB\underline{AA}BA BB\underline{AB}A BBB\underline{AA} BBB\underline{A} BBB$
You see after finite steps this protein will finish it steps.
Set of allowed steps that for them there exist a protein that may have infinitely many steps is dangerous. Which of the following allowed sets are dangerous?
a) $NO\longrightarrow OONN$
b) $\left\{\begin{array}{c}HHCC\longrightarrow HCCH CC\longrightarrow CH\end{array}\right.$
c) Design a set of allowed steps that change $\underbrace{AA\dots A}_{n}\longrightarrow\underbrace{BB\dots B}_{2^{n}}$
d) Design a set of allowed steps that change $\underbrace{A\dots A}_{n}\underbrace{B\dots B}_{m}\longrightarrow\underbrace{CC\dots C}_{mn}$
You see from $c$ and $d$ that we acn calculate the functions $F(n)=2^{n}$ and $G(M,N)=mn$ with these steps. Find some other calculatable functions with these steps. (It has some extra mark.)
