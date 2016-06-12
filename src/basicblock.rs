// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

use address::Address;
use instruction::Instruction;

/// When is this edge taken? Conditionally or unconditionally?
#[derive(Clone,Copy,Debug,Eq,PartialEq)]
pub enum EdgeType {
    /// This edge is taken when a conditional is true.
    ConditionalTrue,
    /// This edge is taken when a conditional is false.
    ConditionalFalse,
    /// This is edge is always taken.
    Unconditional,
}

/// Which direction is this edge going? Inwards or outwards from this `BasicBlock`?
#[derive(Clone,Copy,Debug,Eq,PartialEq)]
pub enum EdgeDirection {
    /// This is an inbound edge with this [`BasicBlock`] as the target.
    ///
    /// [`BasicBlock`]: struct.BasicBlock.html
    In,
    /// This is an outbound edge with this [`BasicBlock`] as the source.
    ///
    /// [`BasicBlock`]: struct.BasicBlock.html
    Out,
}

/// A [basic block] is a sequence of instructions with no inward-bound
/// branches except to the entry point and no outward-bound branches
/// except at the exit.
///
/// [basic block]: https://en.wikipedia.org/wiki/Basic_block
#[derive(Debug)]
pub struct BasicBlock<'f> {
    /// The name of the basic block. Not all blocks have meaningful names.
    pub name: Option<String>,
    /// The address of the first instruction in the basic block.
    pub address: Address,
    /// The instructions within this basic block.
    pub instructions: Vec<&'f Box<Instruction>>,
}

impl<'f> BasicBlock<'f> {
    /// Construct a new `BasicBlock`.
    pub fn new(name: Option<&str>, address: Address) -> Self {
        BasicBlock {
            name: name.map(|s| s.to_owned()),
            address: address,
            instructions: vec![],
        }
    }
}

/// Information about an edge between 2 [basic blocks].
///
/// This represents a branch, jump or other form of control flow
/// transfer within the control flow graph.
///
/// [basic blocks]: struct.BasicBlock.html
#[derive(Debug)]
pub struct BasicBlockEdge {
    /// Is this edge taken [conditionally or unconditionally]?
    ///
    /// [conditionally or unconditionally]: enum.EdgeType.html
    pub edge_type: EdgeType,
    /// Is this an [inbound or outbound] edge?
    ///
    /// [inbound or outbound]: enum.EdgeDirection.html
    pub direction: EdgeDirection,
}
