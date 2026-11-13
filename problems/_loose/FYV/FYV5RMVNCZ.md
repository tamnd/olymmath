---
tag: FYV5RMVNCZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077928
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267377
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $ABC$ be an acute scalene triangle with incenter $I$ , and let $M$ be the circumcenter of triangle $BIC$ . Points $D$ , $B'$ , and $C'$ lie on side $BC$ so that $ \angle BIB' = \angle CIC' = \angle IDB = \angle IDC = 90^{\circ} $ . Define $P = \overline{AB} \cap \overline{MC'}$ , $Q = \overline{AC} \cap \overline{MB'}$ , $S = \overline{MD} \cap \overline{PQ}$ , and $K = \overline{SI} \cap \overline{DF}$ , where segment $EF$ is a diameter of the incircle selected so that $S$ lies in the interior of segment $AE$ . It is known that $KI=15x$ , $SI=20x+15$ , $BC=20x^{5/2}$ , and $DI=20x^{3/2}$ , where $x = \tfrac ab(n+\sqrt p)$ for some positive integers $a$ , $b$ , $n$ , $p$ , with $p$ prime and $\gcd(a,b)=1$ . Compute $a+b+n+p$ .

*Proposed by Evan Chen*
