var searchIndex = {};
searchIndex["disassemble"] = {"doc":"# Disassemble","items":[[3,"Address","disassemble","The location of something in an address space.",null,null],[3,"BasicBlock","","A [basic block] is a sequence of instructions with no inward-bound\nbranches except to the entry point and no outward-bound branches\nexcept at the exit.",null,null],[12,"id","","The ID # for this basic block. This is artificial information and\nnot something from the disassembly.",0,null],[12,"name","","The name of the basic block. Not all blocks have meaningful names.",0,null],[12,"instructions","","The instructions within this basic block.",0,null],[12,"in_edges","","The basic blocks that point to this one.",0,null],[12,"out_edges","","The basic blocks which can be exited to from this one.",0,null],[3,"BasicBlockRef","","A reference to a [`BasicBlock`].",null,null],[12,"id","","The ID for the referenced `BasicBlock`.",1,null],[3,"Function","","A function within a program.",null,null],[12,"symbol","","The [symbol] for this function. This provides the name and `Address`.",2,null],[12,"instructions","","The instructions that comprise this function.",2,null],[12,"basic_blocks","","The basic blocks that comprise this function. These are algorithmically\ndetermined from the `instructions` via `fn build_basic_blocks`.",2,null],[3,"Symbol","","A symbol within an executable or library. This is a named address.",null,null],[12,"address","","The [address] of this symbol.",3,null],[12,"name","","The name of this symbol.",3,null],[11,"fmt","","",4,{"inputs":[{"name":"address"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"address"}],"output":{"name":"address"}}],[11,"new","","Construct an `Address`.",4,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"fmt","","",1,{"inputs":[{"name":"basicblockref"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",1,{"inputs":[{"name":"basicblockref"}],"output":{"name":"basicblockref"}}],[11,"fmt","","",0,{"inputs":[{"name":"basicblock"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a new `BasicBlock`.",0,{"inputs":[{"name":"usize"},{"name":"str"}],"output":{"name":"self"}}],[11,"add_in_edge","","Add an edge that points to this basic block.",0,{"inputs":[{"name":"basicblock"},{"name":"basicblock"}],"output":null}],[11,"add_out_edge","","Add an edge that points from this basic block to another.",0,{"inputs":[{"name":"basicblock"},{"name":"basicblock"}],"output":null}],[11,"fmt","","",2,{"inputs":[{"name":"function"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"build_basic_blocks","","Build the actual basic blocks for this function.",2,{"inputs":[{"name":"function"}],"output":null}],[11,"fmt","","",3,{"inputs":[{"name":"symbol"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","Construct a `Symbol`.",3,{"inputs":[{"name":"address"},{"name":"str"}],"output":{"name":"self"}}],[8,"Instruction","","An assembly instruction, bytecode operation, VM operation, etc.",null,null],[10,"address","","The address of this `Instruction`.",5,{"inputs":[{"name":"instruction"}],"output":{"name":"address"}}],[11,"is_block_terminator","","Does this instruction terminate a `BasicBlock`?",5,{"inputs":[{"name":"instruction"}],"output":{"name":"bool"}}],[10,"is_call","","Does this instruction represent a call?",5,{"inputs":[{"name":"instruction"}],"output":{"name":"bool"}}],[10,"is_local_jump","","Does this instruction represent a local jump?",5,{"inputs":[{"name":"instruction"}],"output":{"name":"bool"}}],[10,"is_return","","Does this instruction represent a function return?",5,{"inputs":[{"name":"instruction"}],"output":{"name":"bool"}}],[11,"is_block_terminator","","Does this instruction terminate a `BasicBlock`?",5,{"inputs":[{"name":"instruction"}],"output":{"name":"bool"}}]],"paths":[[3,"BasicBlock"],[3,"BasicBlockRef"],[3,"Function"],[3,"Symbol"],[3,"Address"],[8,"Instruction"]]};
initSearch(searchIndex);
