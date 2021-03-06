// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://www.apache.org/licenses/LICENSE-2.0> or the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>, at your
// option. This file may not be copied, modified, or distributed
// except according to those terms.

/// The location of something in an address space.
///
/// This is used to provide a location of a [`Function`], [`Instruction`],
/// or other item.
///
/// The meaning of this address is flexibly interpreted by the rest of this
/// library as the meaning depends upon the application embedding and using
/// this library. It may be an actual machine address or it might be something
/// as simple as the offset of an instruction into an array.
///
/// XXX: Should this have any indication for what type of address it is?
///      An address might be an address within a file, a resolved address
///      after being loaded, etc.
///
/// XXX: Should this include any information about the address space
///      that it is from?
///
/// [`Function`]: struct.Function.html
/// [`Instruction`]: trait.Instruction.html
#[derive(Clone, Copy, Debug, Eq, Hash, Ord, PartialEq, PartialOrd)]
pub struct Address {
    address: u64,
}

impl Address {
    /// Construct an `Address`.
    pub fn new(address: u64) -> Self {
        Address { address: address }
    }
}

#[cfg(test)]
mod tests {
    use super::Address;

    #[test]
    fn address_comparison() {
        let addr1 = Address::new(5);
        let addr2 = Address::new(3);
        let addr3 = Address::new(5);
        assert!(addr2 < addr1);
        assert_eq!(addr1, addr3);
    }
}
