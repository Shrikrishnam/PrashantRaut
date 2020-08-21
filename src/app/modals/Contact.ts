export class Contact {
    public phonenumber: number;
    public email: string;
    public firstname: string;
    public lastname: string;
    public message: string;
    public id: string;
  
    constructor(
      $firstname: string,
      $lastname: string,
      $phonenumber: number,
      $email: string,
      $message: string,
      $id: string
    ) {
      this.firstname = $firstname;
      this.lastname = $lastname;
      this.phonenumber = $phonenumber;
      this.email = $email;
      this.message = $message;
      this.id = $id;
    }
  
    public toObject = () => {
      return {
        firstname: this.firstname,
        lastname: this.lastname,
        phonenumber: this.phonenumber,
        email: this.email,
        message: this.message,
      };
    };
  
    /**
     * Getter $phonenumber
     * @return {number}
     */
    public get $phonenumber(): number {
      return this.phonenumber;
    }
  
    /**
     * Getter $email
     * @return {string}
     */
    public get $email(): string {
      return this.email;
    }
  
    /**
     * Getter $firstname
     * @return {string}
     */
    public get $firstname(): string {
      return this.firstname;
    }
  
    /**
     * Getter $lastname
     * @return {string}
     */
    public get $lastname(): string {
      return this.lastname;
    }

    /**
     * Getter $packages
     * @return {string}
     */
    public get $message(): string {
      return this.message;
    }
  
    /**
     * Getter $id
     * @return {string}
     */
    public get $id(): string {
      return this.id;
    }

    /**
     * Setter $phonenumber
     * @param {number} value
     */
    public set $phonenumber(value: number) {
      this.phonenumber = value;
    }
  
    /**
     * Setter $email
     * @param {string} value
     */
    public set $email(value: string) {
      this.email = value;
    }
  
    /**
     * Setter $firstname
     * @param {string} value
     */
    public set $firstname(value: string) {
      this.firstname = value;
    }
  
    /**
     * Setter $lastname
     * @param {string} value
     */
    public set $lastname(value: string) {
      this.lastname = value;
    }
  
    /**
     * Setter $packages
     * @param {string} value
     */
    public set $message(value: string) {
      this.message = value;
    }
  
    /**
     * Setter $id
     * @param {string} value
     */
    public set $id(value: string) {
      this.id = value;
    }
  }
  
