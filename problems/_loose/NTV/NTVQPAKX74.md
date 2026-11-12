---
tag: NTVQPAKX74
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h199551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2008
    source: hf-ai-mo-aops
    label: 2008 China Team Selection Test
---
In a plane, there is an infinite triangular grid consists of equilateral triangles whose lengths of the sides are equal to $ 1$ , call the vertices of the triangles the lattice points, call two lattice points are adjacent if the distance between the two points is equal to $ 1;$
A jump game is played by two frogs $ A,B,$ "A jump" is called if the frogs jump from the point which it is lying on to its adjacent point, " A round jump of $ A,B$ " is called if first $ A$ jumps and then $ B$ by the following rules:
Rule (1): $ A$ jumps once arbitrarily, then $ B$ jumps once in the same direction, or twice in the opposite direction;
Rule (2): when $ A,B$ sits on adjacent lattice points, they carry out Rule (1) finishing a round jump, or $ A$ jumps twice continually, keep adjacent with $ B$ every time, and $ B$ rests on previous position;
If the original positions of $ A,B$ are adjacent lattice points, determine whether for $ A$ and $ B$ ,such that the one can exactly land on the original position of the other after a finite round jumps.
