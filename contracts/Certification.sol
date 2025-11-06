// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Certification {
    struct Cert {
        uint id;
        string name;
        string issuer;
        bool valid;
    }

    mapping(uint => Cert) public certifications;
    uint public certificationCount;

    function createCertification(string memory _name, string memory _issuer) public {
        certificationCount++;
        certifications[certificationCount] = Cert(certificationCount, _name, _issuer, true);
    }

    function verifyCertification(uint _id) public view returns (bool) {
        return certifications[_id].valid;
    }

    function invalidateCertification(uint _id) public {
        certifications[_id].valid = false;
    }
}